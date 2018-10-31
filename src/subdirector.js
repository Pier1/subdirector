((window, $) => {
  'use strict';

  const video = $('video')[0];

  // SUBDIRECTOR_VIEW_TOKEN

  let subStarted = false;
  let subs = [];
  let currentSub = {};

  $('button').click(() => {
    const time = video.currentTime;

    if (!subStarted) {
      subStarted = true;
      $('#subdirector_text').focus();
      currentSub.startTime = time;
    } else {
      currentSub.sub = $('#subdirector_text').val();
      currentSub.endTime = time;
      $('body').append(`<p>${JSON.stringify(currentSub)}</p>`);
      subs.push(currentSub);
      currentSub = {};
      subStarted = false;
      $('#subdirector_text').val('');
    }

    const h = Math.floor(video.currentTime / (60*60));
    const m = Math.floor(video.currentTime / (60));
    const s = parseFloat(video.currentTime % 60).toFixed(3);
  });
})(window, $);
