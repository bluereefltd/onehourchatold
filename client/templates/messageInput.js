Template.messageInput.events({

   'submit form': function (event, template) {
       event.preventDefault();

       var messageInput = event.currentTarget.elements["message"];

       Messages.insert({
           author: 'Julien',
           body: messageInput.value,
           createdAt: new Date()
       });

       messageInput.value = '';
       scrollToBottom();
   }

});