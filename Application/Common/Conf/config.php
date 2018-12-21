<?php
$env = get_cfg_var("custom_env");
if (file_exists(CONF_PATH . "config_".$env.'.php')) {
    return include CONF_PATH . "config_".$env.'.php';
}