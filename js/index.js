$(document).ready(function () {
    $('#contact_form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor entre com seu nome'
                    }
                }
            },
            last_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor entre com seu sobrenome'
                    }
                }
            },
            user_name: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor entre com seu login'
                    }
                }
            },
            grr: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor entre com seu GRR'
                    }
                }
            },
            endereco: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor entre com seu Endereço'
                    }
                }
            },
            cidade: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor entre com sua Cidade'
                    }
                }
            },
            date: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor entre com sua data de nascimento'
                    }
                }
            },
            user_password: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor entre com sua senha'
                    }
                }
            },
            confirm_password: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Por favor confirme sua senha'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor entre com seu email'
                    },
                    emailAddress: {
                        message: 'Email invalido'
                    }
                }
            },
            contact_no: {
                validators: {
                    stringLength: {
                        min: 12,
                        max: 12,
                        notEmpty: {
                            message: 'Por favor entre com seu telefone'
                        }
                    }
                },
                department: {
                    validators: {
                        notEmpty: {
                            message: 'Por favor entre com seu tipo de perfil'
                        }
                    }
                },
            }
        }
    })
        .on('success.form.bv', function (e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow")
            $('#contact_form').data('bootstrapValidator').resetForm();

            e.preventDefault();

            var $form = $(e.target);

            var bv = $form.data('bootstrapValidator');

            $.post($form.attr('action'), $form.serialize(), function (result) {
                console.log(result);
            }, 'json');
        });

    $(document).ready(function () {
        $("#login a").click(function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            $("#content").load(href + " #content");
        });
    });

    $(document).ready(function () {
        $("#cadastro a").click(function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            $("#content").load(href + " #content");
        });
    });

    $(document).ready(function () {
        $("#home a").click(function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            $("#content").load(href + " #content");
        });
    });
});



$(document).ready(function () {
    var touch = $('#resp-menu');
    var menu = $('.menu');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(window).width();
        if (w > 767 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

});