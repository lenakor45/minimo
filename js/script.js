$(document).on('click', '.send', function() {
    var validateForm = $(document).find('#contacsform');
    validateForm.validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Введите Ваш Имя",
                minlength: "Имя должно быть более 2-х символов"
            },
            phone: {
                required: "Введите Email",
                minlength: "Поле должно быть более 5-ти символов",
                email: "Некорректно введен Email"
            }
        },
        submitHandler: function(form) {
            form.submit();
        },
        errorPlacement: function(error, element) {
            var item = element.parents('.item');
            item.append(error);
        }
    });

    validateForm.submit();
});
jQuery.validator.addMethod("accept", function(value, element, param) {
    return value.match(new RegExp("." + param + "$"));
});

validateForm.validate({
    rules: {
        firstname: {
            required: true,
            accept: "accept: "[а - яА - ЯёЁa - zA - Z] + ",",
            minlength: 2
        }
    },
    messages: {
        firstname: {
            required: "Введите имя",
            accept: "Разрешено вводить только буквы",
            minlength: "Имя должно быть более 2-х символов"
        }
    }
});