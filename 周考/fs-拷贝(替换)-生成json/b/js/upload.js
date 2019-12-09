/**
 * @Name: img上传 
 * @Edition: v1.0.0
 * @Date: 2014-04-10 16:02
 * @Author: LiuYu
 */
(function(){
	 /**
      * 本地上传
	  */
	var Upload = function(options){
		if (!(this instanceof arguments.callee)) {
			return new arguments.callee(options);
		}
		this.init(options);
	};
	Upload.prototype = {
        
        init: function () {
            var that = this;
			that.showCount = 0;
			that.uploadTpl = '<div class="image-upload1">' +
								'<span class="image-icon"></span>' +
								'<form class="image-form" method="post" enctype="multipart/form-data" target="up" action="http://localhost/imgUpdata/php/imageUp.php?editorid=myEditor">' +
									'<input style=\"filter: alpha(opacity=0);\" class="image-file" id="image-file" type="file" multiple hidefocus name="upfile" accept="image/gif,image/jpeg,image/png,image/jpg,image/bmp"/>' +
								'</form>' +
							 '</div>';

			that.creatView();
			that.drag();
            return that;
        },
		/**
		 * 创建元素
		 */
        creatView : function () {

            var that = this;

			$( "#uploadWrap" ).append( that.uploadTpl  )
			that.submit();
            return that;
        },
		
		uploadComplete: function(r){
            var that = this,
				dataJSON = $.parseJSON( r );
			$( ".updataImg_wrap" ).append( "<div class='image_wrapper'><img src='http://localhost/imgUpdata/php/"+dataJSON.url+"' width='100%' /></div>" );
			that.imgTypesetting();
        },
		
		/**
		 * 更新上传视图
		 */
		imgTypesetting : function(){
			var that = this,
				imgList = $( ".image_wrapper" );
			if( imgList.length > 1 ){
				imgList.css({
					"background": "#f3f3f3",
					"width" : 242
				})
			}else{
				imgList.css({
					"background": "#f3f3f3",
					"width" : 490
				})
			}
			$( "#uploadWrap" ).css( "height","auto" );
			if( $( ".image-upload1" ).length > 0 ){
				$( ".image-upload1" ).attr("class","image-upload2");
			}
			$( ".image-upload2 .image-icon" ).text( "继续选择图片上传" );
			return that;
		}, 
		
		/**
		 * 上传
		 */
		submit: function (callback) {

            var that = this;

            $( "#uploadWrap" ).delegate( ".image-file", "change", function ( e ) {
				var input = $( '<input style=\"filter: alpha(opacity=0);\" class="image-file" id="image-file" type="file" multiple hidefocus name="upfile" accept="image/gif,image/jpeg,image/png,image/jpg,image/bmp"/>' );
                if ( !this.parentNode ) {
                    return;
                }
				$( ".uploadPrompt" ).text( "Loading...." );
				
                $('<iframe name="up"  style="display: none"></iframe>').insertBefore( "#uploadWrap" ).on('load', function(){
                    var r = this.contentWindow.document.body.innerHTML;
                    if(r == '') return;
					that.uploadComplete(r);
                    $(this).unbind('load');
                    $(this).remove();

                });

                $(this).parent()[0].submit();
                $( ".image-form" ).html( input );

            });

            return that;
        },
		
		/**
		 * 拖动上传
		 */
		drag: function () {
			var that = this;
			//做拽上传的支持
			$('.dialog-image').on('drop',function (e) {
				e.preventDefault();
				$( ".dragUpload_mask" ).fadeOut();
				//获取文件列表
				var fileList = e.originalEvent.dataTransfer.files;
				var img = document.createElement('img');

				var hasImg = false;
				$.each(fileList, function (i, f) {
					if (/^image/.test(f.type)) {

						//创建图片的base64
						//Base.createImgBase64(img, f, me.dialog);

						var xhr = new XMLHttpRequest();
						xhr.open("post", 'http://localhost/imgUpdata/php/imageUp.php' + "?type=ajax", true);
						xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
						//模拟数据
						var fd = new FormData();
						
						fd.append('upfile', f);
						

						xhr.send(fd);
						xhr.addEventListener('load', function (e) {
							var r = e.target.response, json;

							//alert( r )
							that.uploadComplete(r);
							if (i == fileList.length - 1) {
								$(img).remove()
							}
						});

						hasImg = true;
					}
				});
				if (hasImg) {
					e.preventDefault();
					//me.toggleMask("Loading....");
				}
				
			}).on('dragover', function (e) {
				$( ".dragUpload_mask" ).fadeIn();
				e.preventDefault();

			});
		}
    };
	window.Upload = Upload;

	
})()
window.onload = function(){
	Upload();
}