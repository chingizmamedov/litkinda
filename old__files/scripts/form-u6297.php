<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2018.1.0.386
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Отправка Квиз_закупка_01',
	'heading' => 'Отправка новой формы',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Отмечено',
		'checkbox_unchecked' => 'Флажок не установлен',
		'submitted_from' => 'Формы, отправленные с веб-сайта: %s',
		'submitted_by' => 'IP-адрес посетителя: %s',
		'too_many_submissions' => 'Недопустимо высокое количество отправок с этого IP-адреса за последнее время',
		'failed_to_send_email' => 'Не удалось отправить сообщение эл. почты',
		'invalid_reCAPTCHA_private_key' => 'Недействительный закрытый ключ reCAPTCHA.',
		'invalid_reCAPTCHA2_private_key' => 'Недействительный закрытый ключ reCAPTCHA 2.0.',
		'invalid_reCAPTCHA2_server_response' => 'Недействительный ответ сервера reCAPTCHA 2.0.',
		'invalid_field_type' => 'Неизвестный тип поля \'%s\'.',
		'invalid_form_config' => 'Недопустимая конфигурация поля \"%s\".',
		'unknown_method' => 'Неизвестный метод запроса сервера'
	),
	'email' => array(
		'from' => 'vd@dobroezzhev.ru',
		'to' => 'vd@dobroezzhev.ru'
	),
	'fields' => array(
		'custom_U6333' => array(
			'order' => 1,
			'type' => 'string',
			'label' => 'Имя',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6346' => array(
			'order' => 3,
			'type' => 'string',
			'label' => 'Сотовый телефон',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6321' => array(
			'order' => 4,
			'type' => 'string',
			'label' => 'Сообщение',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6308' => array(
			'order' => 5,
			'type' => 'string',
			'label' => 'Пользовательский текст:',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6300' => array(
			'order' => 6,
			'type' => 'string',
			'label' => 'тип товара',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6342' => array(
			'order' => 7,
			'type' => 'string',
			'label' => 'Пользовательский текст:',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6312' => array(
			'order' => 8,
			'type' => 'string',
			'label' => 'Срок производсва',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6316' => array(
			'order' => 2,
			'type' => 'string',
			'label' => 'Емаил',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6329' => array(
			'order' => 9,
			'type' => 'string',
			'label' => 'Цена товара',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6325' => array(
			'order' => 10,
			'type' => 'string',
			'label' => 'Сумма закупа',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6337' => array(
			'order' => 11,
			'type' => 'string',
			'label' => 'Пользовательский текст:',
			'required' => false,
			'errors' => array(
			)
		),
		'custom_U6350' => array(
			'order' => 12,
			'type' => 'string',
			'label' => 'Опыт закупки',
			'required' => false,
			'errors' => array(
			)
		)
	)
);

process_form($form);
?>