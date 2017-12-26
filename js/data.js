const multiClusterData2 = {
  cardBody: ['600 of 600','132 of 135', '200 of 200'],
  cardSecondary: ['Prism Pro Licenses in use ', 'Calm Licenses in use', 'Prism Add-On Licenses in use'],
}

const cardData = {
  cardBody: ['Prosql_3002', 'Ntnx_Marketing_001',''],
  cardSecondary: ["Is consuming the most licenses · 400 licenses", 'Expires in 30 days · 12/12/2020',''],
}

const fsChecked = `
  <input type='checkbox'
  style='display:none;'
  id='fs'
  value='fs'>`

const usageData = {
  Name: ['Ntnx_Marketing_001', 'Ntnx_test_001', 'Sql_databse_Product', 'Prosql_3002', 'Apex_deploy', 'Backup_Product_07747', 'Exchange-server-production', 'Ntnx_Marketing_001', 'Backup_Product_07747', 'Apex_deploy', 'Exchange-server-production'],

  Type: ['Acropolis Pro', 'Acropolis Pro', 'Acropolis Pro', 'Acropolis Pro', 'Acropolis Pro', 'Acropollis Ultimate', 'Acropollis Ultimate', 'Acropollis Ultimate', 'File Server', 'File Server', 'Software Encryption', 'Software Encryption'],

  Purchased: ['75', '60', '13', '75', '60', '44', '75', '60', '13', '75', '60', '13'],

  core:  ['30', '20', '4', '24', '10', '8', '32', '48', '84', '8', '8', '16'],

  hdd:  ['80', '160', '150', '200', '40', '44', '75', '60', '13', '75', '60', '13'],

  flash:  ['40', '100', '75', '100', '20', '44', '75', '60', '13', '75', '60', '13'],

  Expiration: ['12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2022', '12/12/2022', '12/12/2022', '12/12/2022', '12/12/2022', '12/12/2022', '12/12/2022'],
}

const licensePrices = [{
    key: 'Starter',
    price: 9000
  },
  {
    key: 'Pro',
    price: 12000
  },
  {
    key: 'Ultimate',
    price: 16000
  },
]


const purchaseDataTable = {
  id: ['AOS-PRO-CORE-4YRS-133550', 'AOS-PRO-HDD-4YRS-133563', 'AOS-PRO-FLASH-4YRS-133540','FILE-SERVER-CORE-4YRS-133643','FILE-SERVER-HDD-4YRS-133956','FILE-SERVER-FLASH-4YRS-133103', ],
  type:['Acropolis Pro', 'Acropolis Pro','Acropolis,Pro','File Sever','File Server','FileServer'],
  capacity:['Core','HDD','Flash','Core','HDD','Flash'],
  purchased: [92, 113, 74, 92, 113, 74, 63, 103, 96, 113, 76, 54, 76, 98, 63, 103],
  use: [90, 113, 72, 90, 113, 72,63, 102, 96, 11, 74, 50, 76, 88, 61, 102],
  Expiration: ['12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020']
}


const multiClusterDataTable = {

  id: ['Prism Central West', 'Prism Central East', 'Prism Central Global', 'Calm  License PC West', 'Calm License PC East', 'Calm License PC Global','Prism Central West'],
  type: ['Prism Pro', 'Prism Pro', 'Prism Pro', 'Calm', 'Calm', 'Calm', 'Microsegmentation'],
  unit: ['Node', 'Node', 'Node', 'VM Pack', 'VM Pack', 'VM Pack',`Node`],
  purchased: [200, 200, 200, 50, 30, 50, 200],
  use: [200, 200, 200, 53, 36, 44,200],
  Expiration: ['12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020', '12/12/2020']
}

//
const capacityData = {
  "Nodes": 12,
  "Cores": 192,
  "HDD": 360,
  "SSD": 23.04
}

let Popurri = {
  option: 9000,
  sw: null,
  fs: null
}

let sum = Popurri.option + Popurri.sw + Popurri.fs;
