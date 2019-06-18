const tracePlugin = require('@iopipe/trace');
const eventInfoPlugin = require('@iopipe/event-info');
const profilerPlugin = require('@iopipe/profiler');

module.exports = {
  plugins: [tracePlugin(), eventInfoPlugin(), profilerPlugin()]
};
