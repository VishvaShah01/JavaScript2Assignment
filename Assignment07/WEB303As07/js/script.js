$(function () {
    $('#photo-viewer').customPhotoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '800px',
            height: '450px',
            opacity: 100
        });


        //modal code goes here
        e.preventDefault();
        (function (someParameter) {
            console.log(someParameter);
            // Remove modal content from page and store in $content
            var $content_ = $content.detach();
            var modal = new Modal();
            // Click handler calls open() method of modal object
            
            modal.open({
                content: $content_,
                width: 800,
                height: 'auto',
            });
        })("ValuePassedIn");
        var $contentH11 = `<h1>Vishva Shah's Photo Gallery</h1>`;
        $('.modal').prepend($contentH11);
        $contentH11.addClass("modalHead");
    });
});