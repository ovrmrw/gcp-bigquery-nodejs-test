import * as BigQuery from '@google-cloud/bigquery'

export const bigquery = BigQuery({
  projectId: 'gcp-test-186214',
  credentials: require('./credentials/gcp-test-f698605c0902.json'),
})
