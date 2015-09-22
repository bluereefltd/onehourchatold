Template.messagesList.helpers({

    messages: function () {

        var messages = [];
        messages.push({
            author: 'Julien',
            body: 'Anybody there?',
            createdAt: new Date()
        });
        messages.push({
            author: 'Bob',
            body: 'I am!',
            createdAt: new Date()
        });

        return messages;

    }
});