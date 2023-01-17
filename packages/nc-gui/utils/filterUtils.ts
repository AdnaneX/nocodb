import { UITypes } from 'nocodb-sdk'

export const comparisonOpList: {
  text: string
  value: string
  ignoreVal?: boolean
  includedTypes?: UITypes[]
  excludedTypes?: UITypes[]
}[] = [
  {
    text: 'is checked',
    value: 'checked',
    ignoreVal: true,
    includedTypes: [UITypes.Checkbox],
  },
  {
    text: 'is not checked',
    value: 'notchecked',
    ignoreVal: true,
    includedTypes: [UITypes.Checkbox],
  },
  {
    text: 'is equal',
    value: 'eq',
  },
  {
    text: 'is not equal',
    value: 'neq',
  },
  {
    text: 'is like',
    value: 'like',
    excludedTypes: [UITypes.Checkbox],
  },
  {
    text: 'is not like',
    value: 'nlike',
    excludedTypes: [UITypes.Checkbox],
  },
  {
    text: 'is empty',
    value: 'empty',
    ignoreVal: true,
    excludedTypes: [UITypes.Checkbox],
  },
  {
    text: 'is not empty',
    value: 'notempty',
    ignoreVal: true,
    excludedTypes: [UITypes.Checkbox],
  },
  {
    text: 'is null',
    value: 'null',
    ignoreVal: true,
  },
  {
    text: 'is not null',
    value: 'notnull',
    ignoreVal: true,
  },
  {
    text: '>',
    value: 'gt',
    excludedTypes: [UITypes.Checkbox],
  },
  {
    text: '<',
    value: 'lt',
    excludedTypes: [UITypes.Checkbox],
  },
  {
    text: '>=',
    value: 'gte',
    excludedTypes: [UITypes.Checkbox],
  },
  {
    text: '<=',
    value: 'lte',
    excludedTypes: [UITypes.Checkbox],
  },
]
