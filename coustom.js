function playVideo() {
    var videoUrlInput = document.getElementById("videoUrlInput");
    var newVideoUrl = videoUrlInput.value.trim();

    if (newVideoUrl !== "") {
        var newQualityOption = {
            label: 'Custom',
            src: newVideoUrl,
            type: 'application/x-mpegURL'
        };

        player.src({
            src: newVideoUrl,
            type: 'application/x-mpegURL',
            label: 'Custom'
        });

        qualityOptions.push(newQualityOption);
        videoUrlInput.value = "";

        // Optional: Refresh quality options in the player menu
        player.updateSrc(qualityOptions);
        player.reset();
    }
}
