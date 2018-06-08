#/bin/bash
sed -i "s@testpass@$MONGODB_STAGE_PASS@" /oc_client_back/config/staging.yaml
sed -i "s@testpass@$MONGODB_PROD_PASS@" /oc_client_back/config/production.yaml
sed -i "s@TOKENSTAGE@$TOKENSTAGE@" /oc_client_back/config/staging.yaml
sed -i "s@TOKENPROD@$TOKENPROD@" /oc_client_back/config/production.yaml
