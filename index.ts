import { bigquery } from './bigquery'
import { createDataset, deleteDataset, datasetName } from './datasets'
import { createTable, schema, importLocalFile } from './tables'

const table1 = 'utf'
const table2 = 'shitfjis_from_utf'
const table3 = 'utf_values_from_shiftjis'

deleteDataset(datasetName)
  .then(() => createDataset(datasetName))
  .then(() => createTable(datasetName, table1, schema))
  .then(() => importLocalFile(datasetName, table1, './data.csv'))
  .then(() => createTable(datasetName, table2, schema))
  .then(() => importLocalFile(datasetName, table2, './data.shiftjis.csv'))
  .then(() => createTable(datasetName, table3, schema))
  .then(() => importLocalFile(datasetName, table3, './data.complex.csv'))
