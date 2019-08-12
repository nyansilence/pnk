<?php 
    require('header.php')
?>

<?php
    if($_POST){
        $name = $_POST['fullname'];
        $email = $_POST['email'];
        $subject = $_POST['title'];
        $message = $_POST['content'];
        mail("nyansilence@gmail.com", $subject, $message, $email, $fullname);
    }
?>
<div class="contact-picture subpage-content bg-blue-2">
    <div class="container">
        <div class="row">
            <div class="hidden-xs col-sm-7 col-lg-6">
                <div class="contact-image"> <img alt="Liên hệ với chúng tôi" src="/img/contact-image.png"> </div>
            </div>
            <div class="contact-address col-xs-12 col-sm-5 col-lg-6 vertical-align">
                <div class="contact-category">
                    <p class="contact-title text-white bold">Liên hệ với chúng tôi</p>
                    <div class="contact-category">
                        <p class="bold contact-category-title text-content-white">Email</p>
                        <p class="contact-category-content text-content-white">account@AtoZmarket.world</p>
                    </div>
                    <div class="contact-category">
                        <p class="bold contact-category-title text-content-white">Điện thoại</p>
                        <p class="contact-category-content text-content-white"> <span class="bold">Nguyễn Khương Phong: </span>090 990 2579</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="p-4">
        <h3 class="text-center">
            Email đã được gửi đến chúng tôi cảm ơn quý khách đã liên hệ
        </h3>
    </div>
</div>

<?php 
    require('footer-ct.php')
?>