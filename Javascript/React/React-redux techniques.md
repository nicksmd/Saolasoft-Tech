1. ImmutableJs List.count(condition):
```javascript
  activeOverlays.count(o => o.get('type') === payload)
```
2. lodash find
```javascript
  import { find } from 'lodash'
  find(DEFAULT_OVERLAYS, o => o.type === payload)
```
3. ImmutableJs List/Map/Set.map((e,index))
```javascript
  activeOverlays.map((overlay, index) => (...))
```
4. Key can be created by new Date().getTime()
```javascript
  const newOverlay = Map({
        uuid: new Date().getTime(),
        type: overlayTemplate.type,
        parameters: overlayTemplate.parameters,
        color: overlayTemplate.colors[noOfSameOverlayType],
        name: overlayTemplate.name,
        settingDisabled: overlayTemplate.settingDisabled,
        show: true,
      })
```
5. Các store liên quan đến nhau nên được nhóm lại thành 1 object => đỡ phải expose state và check proptypes nhi lần
- before refactor:
```javascript
  currentSettingIndicatorParams: '',
  currentSettingIndicatorIndex: -1,
  showChartSettingModal: false,
```
- after refactor:
```javascript
  chartSettingModal: {
      show: false,
      chartEntity: '',
      entityIndex: -1,
      parameters: '',
    },
```
6. propTypes for array and object
```javascript
object:
  chartSettingModal: PropTypes.shape({}).isRequired,
array:
  activeOverlays: PropTypes.arrayOf(PropTypes.shape).isRequired,
```
