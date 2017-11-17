import { bigquery } from './bigquery'

export const datasetName = 'sample_dataset'

export async function createDataset(datasetId) {
  return bigquery
    .createDataset(datasetId)
    .then(results => {
      const dataset = results[0];
      console.log(`Dataset ${dataset.id} created.`);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

export async function deleteDataset(datasetId) {
  const dataset = bigquery.dataset(datasetId);
  return dataset
    .delete()
    .then(() => {
      console.log(`Dataset ${dataset.id} deleted.`);
    })
    .catch(err => {
      // console.error('ERROR:', err);
    });
}

// deleteDataset(datasetName)
//   .then(() => createDataset(datasetName))
