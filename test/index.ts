import { wavesItemsApi, parseDataPayload } from '../src/index'
const seed = '9e0fa09dcc6e40ae95f5d8e6795c76c5fb97507be9ff40d9b6f58df27c171e53'

async function createItem() {
  const items = wavesItemsApi('T')
  const request = items.createItem({ version: 1, quantity: 100, name: 'The sword of pain', imageUrl: 'http://ya.ru' })
  const item = await request.broadcast(seed)
  console.log(item)
}
//createItem()

async function getItem() {
  const items = wavesItemsApi('T')
  const item = await items.getItem('GYNak5j2FELFEiekBbbfof1cLyRVmkf7X5koYiKhYm29')
  console.log(item)
}
//getItem()

async function getItemList() {
  const items = wavesItemsApi('W')
  const list = await items.getItemCatalog('3PKEQiRe2u6488jdvUAUYshrM4fQPf4omak')
  console.log(list)
}
//getItemList()

async function getUserInventory() {
  const items = wavesItemsApi('W')
  const list = await items.getUserInventory(
    '3PKEQiRe2u6488jdvUAUYshrM4fQPf4omak',
    '3PKEQiRe2u6488jdvUAUYshrM4fQPf4omak',
  )
  console.log(list)
}
//getUserInventory()

async function parsePayload() {
  const { version, data } = parseDataPayload(
    '{"version":1,"name":"Shadow Era: Call of the Crystals - Cobra Demon (se056)","imageUrl":"https://cdn.shadowera.com/cards/shdw/se056.jpg","misc":{"set":"Call of the Crystals","number":56,"id":"se056"}}',
  )
  console.log(version, data)
}
parsePayload()
