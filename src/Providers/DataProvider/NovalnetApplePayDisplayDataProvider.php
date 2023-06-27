<?php
/**
 * This file is used for displaying the Apple Pay button
 *
 * @author       Novalnet AG
 * @copyright(C) Novalnet
 * @license      https://www.novalnet.de/payment-plugins/kostenlos/lizenz
 */
namespace Novalnet\Providers\DataProvider;

use Novalnet\Helper\PaymentHelper;
use Novalnet\Services\SettingsService;
use Plenty\Plugin\Templates\Twig;

/**
 * Class NovalnetApplePayDisplayDataProvider
 *
 * @package Novalnet\Providers\DataProvider
 */
class NovalnetApplePayDisplayDataProvider
{
    /**
     * Display the Apple Pay button
     *
     * @param Twig $twig
     * @param Arguments $arg
     *
     * @return string
     */
    public function call(Twig $twig,
                         $arg)
    {

        $paymentHelper      = pluginApp(PaymentHelper::class);
        $settingsService    = pluginApp(SettingsService::class);

        if($settingsService->getPaymentSettingsValue('payment_active', 'novalnet_applepay') == true) {

            // Get the Payment MOP Id
            $paymentMethodDetails = $paymentHelper->getPaymentMethodByKey('NOVALNET_APPLEPAY');

            // Render the Google Pay button
            return $twig->render('Novalnet::PaymentForm.NovalnetApplePayDisplay',
                                        [
                                            'paymentMethodId'       => $paymentMethodDetails[0],
                                
                                        ]);
        } else {
            return '';
        }
    }
}
