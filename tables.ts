import { bigquery } from './bigquery'
import { datasetName } from './datasets'

export const schema = 'Name:string'

export async function createTable(datasetId, tableId, schema) {
  const options = {
    schema,
  }
  return bigquery
    .dataset(datasetId)
    .createTable(tableId, options)
    .then(results => {
      const [table] = results
      console.log(`Table ${table.id} created.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

export async function importLocalFile(datasetId, tableId, filename) {
  let job;

  const metadata = {
    skipLeadingRows: 1,
  }
  return bigquery
    .dataset(datasetId)
    .table(tableId)
    .import(filename, metadata)
    .then(results => {
      job = results[0];
      console.log(`Job ${job.id} started.`);
      return job;
    })
    .then(metadata => {
      const errors = metadata.status.errors;
      if (errors && errors.length > 0) {
        throw errors;
      }
    })
    .then(() => {
      console.log(`Job ${job.id} completed.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}
