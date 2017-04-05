'use babel'

import { serialize } from '../src'

module.exports = function() {
  const items = []
  function debug(item: string) {
    items.push(serialize(item))
  }

  class Test {
    serialize() {
      return 'asd'
    }
  }
  class TestTwo {

  }
  class TestParent {
    serialize() {
      return serialize([
        new Test(),
        new TestTwo(),
      ])
    }
  }

  debug(null)
  debug(1)
  debug(1.1)
  debug('你好世界')
  debug([1, 2, 3, 4, 5])
  debug(['Helló', 'World'])
  debug({ hey: 'hi' })
  debug({ key: 'value', key2: 1 })
  debug({ key: 1, key2: 'value2' })
  debug({ key: '1value', key2: 'value2' })
  debug({ key: 'value1', key2: 'value2' })
  debug(new Test())
  debug(new TestTwo())
  debug(new TestParent())

  return items
}
