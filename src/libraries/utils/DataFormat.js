/*eslint-disable*/
let DataFormat = {}

DataFormat.getFlow = function  (flowVlueBytes) {
  var flow = ''
  // 如果赠送流量小于1MB.则显示为KB
  if (flowVlueBytes / 1024 < 1024) {
    flow = (Math.round(flowVlueBytes / 1024) > 0 ? Math.round(flowVlueBytes / 1024) : 0) + 'KB'
  } else if (flowVlueBytes / 1024 >= 1024 && flowVlueBytes / 1024 / 1024 < 1024) {
    // 如果赠送流量大于1MB且小于1    GB的则显示为MB
    flow = (Math.round(flowVlueBytes / 1024 / 1024) > 0 ? Math.round(flowVlueBytes / 1024 / 1024) : 0) + 'MB'
  } else if (flowVlueBytes / 1024 / 1024 >= 1024) {
    // 如果流量大于1Gb
    var gbFlow = flowVlueBytes / 1024 / 1024 / 1024
    // toFixed(1);四舍五入保留一位小数
    flow = gbFlow.toFixed(2) + 'GB'
  } else {
    flow = '0KB'
  }
  return flow
}

export default DataFormat;
