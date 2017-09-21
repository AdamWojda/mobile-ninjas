<?php
// if ($_POST['cf_name_register'] && $_POST['cf_last_register'] && $_POST['cf_email_register'] && $_POST['cf_email_conf_register'] && $_POST['cf_phone_register']&& $_POST['cf_pesel_register'] && $_POST['cf_street_register'] && $_POST['cf_home_register'] && $_POST['cf_post_code_register'] && $_POST['cf_city_register'] && $_POST['cf_zgoda_1'] && $_POST['cf_zgoda_2'] ) {
//
// 	$name = 'Imię i nazwisko: ';
// 	$email = 'Adres e-mail: ';
// 	$phone = 'Numer telefonu: ';
// 	$pesel = 'Numer pesel: ';
// 	$message = 'Wiadomość: ';
// 	$title_from = 'Wiadomość od ';
//     $ulica = 'Ulica: ';
//     $mieszkanie = 'Numer mieszkania/domu: ';
//     $kodpocztowy = 'Kod pocztowy: ';
//     $miasto = 'Miasto: ';
//     $dane_podst_title = 'Dane podstawowe:';
//     $dane_title = 'Dane adresowe:';
//
//     require_once('../../../wp-load.php');
//     global $wpdb;
//
//     $recipient = get_field('footer_register_recipient', 'option');
//
// 	$headers  = 'From: =?utf-8?b?'. base64_encode($_POST['cf_name_register']).'?= <'.$_POST['cf_email_register'].'>'."\r\n";
// 	$headers .= 'Return-Path: '.$_POST['cf_email_register']."\r\n";
// 	$headers .= 'MIME-Version: 1.0'."\r\n";
// 	$headers .= 'Content-Type: text/HTML; charset=utf-8'."\r\n";
// 	$headers .= 'Content-Transfer-Encoding: 8bit';
//
//     $message = '<br /><br /><strong style="font-size: 14px;font-family:Tahoma;">Wiadomość z formularza rejestracyjnego: </strong><br /><br />';
//
//     $message .= '<br /><br /><strong style="font-size: 16px;font-family:Tahoma;">Dane podstawowe:</strong><br /><br />';
//
// 	$message .= $name.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_name_register'].' '.$_POST['cf_last_register'].'</strong><br /><br />';
// 	$message .= $email.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_email_register'].'</strong><br /><br />';
//     $message .= $phone.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_phone_register'].'</strong><br /><br />';
//     $message .= $pesel.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_pesel_register'].'</strong><br /><br />';
//
//     $message .= '<br /><br /><strong style="font-size: 16px;font-family:Tahoma;">'.$dane_title.'</strong><br /><br />';
//
//     $message .= $ulica.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_street_register'].'</strong><br /><br />';
//     $message .= $mieszkanie.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_home_register'].'</strong><br /><br />';
//     $message .= $kodpocztowy.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_post_code_register'].'</strong><br /><br />';
//     $message .= $miasto.'<strong style="font-size: 14px;font-family:Verdana;">'.$_POST['cf_city_register'].'</strong><br /><br />';
//
//     //
// 	// $message .= '<br /><strong>'.$message.'</strong><br />'.nl2br($_POST['cf_message']);
//
// 	$title = "=?utf-8?b?".base64_encode($title_from.$_POST['cf_name_register'])."?=";
// 	mail($recipient, $title, $message, $headers);
//
// 	echo 'success';
//
// }
?>
