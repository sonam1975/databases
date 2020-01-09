var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $main: $('#roombutton'),

  initialize: function () {

    $('#rooms select').on('change', function () {
      if ($('#rooms select').val() === 'All Messages') {
        MessagesView.render();
      } else {
        RoomsView.renderSelectedRoom();
      }
    });
    $('#roombutton').on('click', function () {
      RoomsView.renderRoom($('#roomname').val());
      $('#roomname').val('');
    });
    RoomsView.renderRoomList();
  },

  renderRoomList: function () {

    var duplicationCheck = [];
    var pulledDataAlias = MessagesView.pulledData[0];
    for (let i = 0; i < pulledDataAlias.length; i++) {
      if ((pulledDataAlias[i]['username']) && (pulledDataAlias[i]['text']) && (pulledDataAlias[i]['roomname']) && !MessagesView.escapeTester(i)) {
        if (duplicationCheck.indexOf(pulledDataAlias[i]['roomname']) === -1) {
          duplicationCheck.push(pulledDataAlias[i]['roomname']);
          RoomsView.renderRoom(pulledDataAlias[i]['roomname']);
        }
      }
    }
    MessagesView.handleRefresh();
  },

  // Need to rename above function ^ for test
  renderRoom: function (roomName) {
    $('#rooms select').append(`<option id="${roomName}">${roomName}</option>`);
  },

  renderSelectedRoom: function () {
    App.startSpinner();
    let selected = $('#rooms select').val();
    $('#chats').html('');
    for (let i = 0; i < MessagesView.pulledData[0].length; i++) {
      if (MessagesView.pulledData[0][i]['username'] !== undefined && MessagesView.pulledData[0][i]['text'] !== undefined && MessagesView.pulledData[0][i]['roomname'] === selected && !MessagesView.escapeTester(i)) {
        if (Friends.friendList.indexOf(MessagesView.pulledData[0][i]['username']) === -1) {
          $('#chats').append(MessageView.renderMessage(MessagesView.pulledData[0][i]));
        } else {
          $('#chats').append(MessageView.renderFriendMessage(MessagesView.pulledData[0][i]));
        }
      }
    }
    App.stopSpinner();
  },
};
