# Remote AutoComplete
A redux friendly autocomplete for fetching remote options for an autocomplete. Depends heavily on Redux-Saga driven data model.

### Props
label = '',
value = '',
values = [],
options = [],
onChange = () => null,
onFetch = () => null,
optionValueKey = 'value',
optionLabel = null,
optionLabelKey = 'label',
showNoneOption = true,
showLabel = true,
children,