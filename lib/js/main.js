$(document).ready(function() {
    $('#telephone').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nameInput: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            textarea: {
                required: true
            }
        },
        messages: {
            nameInput: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu email.',
            textarea: 'Por favor, deixe-nos sua mensagem.'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(event, validator) {
            let incorrectFields = validator.numberOfInvalids()
            
            if(incorrectFields){
                alert(`Você deixou ${incorrectFields} campos sem preencher!`)
            }
        }
    })
})