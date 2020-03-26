jQuery(document).ready(function($){

    var dropdownController = {
        open: function(drop){
            drop.slideDown(200);
        },
        closeAll: function(){
            $('[data-drop="open"].active').removeClass('active');
            $('[data-drop="body"]').hide()
        },
        close: function(drop){
            drop.slideUp(200);

            drop.find('[data-drop="body"]').hide();
            drop.find('[data-drop="open"]').removeClass('active');
        },
        init: function(){

            var initiators = $('[data-drop="open"]'),
                _this = this;

            initiators.on('click', function(){

                var dropToOpen = $(this).siblings('[data-drop="body"]');

                if(! $(this).hasClass('active')){
                    _this.open(dropToOpen);
                }else{
                    _this.close(dropToOpen);
                }

                $(this).toggleClass('active');

            })

            $(document).on('click', function(e){

                if($(e.target).parents('[data-drop]').length === 0 &&
                ! $(e.target).attr('data-drop')){
                    _this.closeAll();
                }

            })

        }
    }

    dropdownController.init();

})