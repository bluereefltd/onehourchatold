Template.messageInput.events({

    'submit form': function (event, template) {
        event.preventDefault();

        var messageInput = event.currentTarget.elements["message"];

        Messages.insert({
            author: Meteor.user().username,
            body: messageInput.value,
            createdAt: new Date()
        });

        messageInput.value = '';
        scrollToBottom();
    },

    'click #login-welcome': function () {
        $('#login-sign-in-link').click();
    }

});