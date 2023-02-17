/*


$query->select(
    'veh_id AS id',
    'veh_tipo_id AS tipo_id',
    'veh_fh_entrada AS entrada',
    'veh_sitio_entrada AS sitio_entrada',
    'veh_fh_salida AS salida',
    'veh_sitio_salida AS sitio_salida',
    'veh_clase AS clase',
    'veh_tipo AS tipo',
    'liq_fh_liquidacion AS liquidacion',
    'liq_tfa_nombre AS tarifa',
    'fac_descuentos as descuento',
    DB::raw("CONCAT(liq_fac_prefijo,'-',liq_fac_numero) AS factura"),
    'fac_subtotal AS subtotal',
    'fac_impuestos AS impuestos',
    'fac_ajuste AS ajuste',
    'fac_total AS total_pagado',
    'dinero_entregado',
    'cambio',
    'veh_purgado AS purgado',
    'veh_placa'
    );

    DB::raw("'liq_tfa_nombre' AS tarifa"),
    DB::raw("'fac_descuentos' AS descuento"),
    DB::raw("'factura' AS factura"),
    DB::raw("'fac_subtotal' AS subtotal"),
    DB::raw("'fac_impuestos' AS impuestos"),
    DB::raw("'fac_ajuste' AS ajuste"),
    DB::raw("'fac_total' AS total_pagado"),
    DB::raw("'dinero_entregado' AS dinero_entregado"),
    DB::raw("'cambio' AS cambio"),
    'veh_purgado AS purgado',
    'veh_placa'
    
    
    

    $query->select(
    'veh_id AS id',
    'veh_tipo_id AS tipo_id',
    'veh_fh_entrada AS entrada',
    'veh_sitio_entrada AS sitio_entrada',
    'veh_fh_salida AS salida',
    'veh_sitio_salida AS sitio_salida',
    'veh_clase AS clase',
    'veh_tipo AS tipo'
    );

    $query->select('veh_id AS id', 'veh_tipo_id AS tipo_id', 'veh_fh_entrada AS entrada', 'veh_sitio_entrada AS sitio_entrada', 'veh_fh_salida AS salida', 'veh_sitio_salida AS sitio_salida', 'veh_clase AS clase', 'veh_tipo AS tipo', 'liq_fh_liquidacion AS liquidacion', 'liq_tfa_nombre AS tarifa', 'fac_descuentos as descuento', DB::raw("CONCAT(liq_fac_prefijo,'-',liq_fac_numero) AS factura"), 'fac_subtotal AS subtotal', 'fac_impuestos AS impuestos', 'fac_ajuste AS ajuste', 'fac_total AS total_pagado', 'dinero_entregado', 'cambio', 'veh_purgado AS purgado', 'veh_placa');



















    $query->select(
    'veh_id AS id',
    'veh_tipo_id AS tipo_id',
    'veh_fh_entrada AS entrada',
    'veh_sitio_entrada AS sitio_entrada',
    'veh_fh_salida AS salida',
    'veh_sitio_salida AS sitio_salida',
    'veh_clase AS clase',
    'veh_tipo AS tipo',

    'liq_fh_liquidacion AS liquidacion',
    'liq_tfa_nombre AS tarifa',
    'fac_descuentos as descuento',
    DB::raw("
        CONCAT(liq_fac_prefijo,'-',liq_fac_numero) AS factura"),
        'fac_subtotal AS subtotal',
        'fac_impuestos AS impuestos',
        'fac_ajuste AS ajuste',
        'fac_total AS total_pagado',
        'dinero_entregado',
        'cambio',
        'veh_purgado AS purgado',
        'veh_placa'
    );

*/



