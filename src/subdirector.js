((window, $) => {
  'use strict';

  const video = $('video')[0];
  const source = video.currentSrc;

  // SUBDIRECTOR_VIEW_TOKEN

  let subStarted = false;
  let currentSub = {};

  let subsForSource = {
    source: source,
    subs: []
  };

  // if (localStorage.subs) {
  //   subsForSource = localStorage.subs.find((el) => { return el.source === source; });
  // } else {
  //   subsForSource = {
  //     source: source,
  //     subs: []
  //   };
  // }

  $('button').click(() => {
    const time = video.currentTime;

    if (!subStarted) {
      subStarted = true;
      $('#subdirector_text').focus();
      currentSub.startTime = time;
    } else {
      currentSub.sub = $('#subdirector_text').val();
      currentSub.endTime = time;

      subsForSource.subs.push(currentSub);
      localStorage.subs = JSON.stringify(subsForSource);
      currentSub = {};
      subStarted = false;
      $('#subdirector_text').val('');
    }

    const h = Math.floor(video.currentTime / (60*60));
    const m = Math.floor(video.currentTime / (60));
    const s = parseFloat(video.currentTime % 60).toFixed(3);
  });
})(window, $);
