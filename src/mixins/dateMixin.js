import format from 'date-fns/format'

export default {
  methods: {
    formatDate: function (inputString) {
      var parts = inputString.split('-');
      var date = new Date(parts[0], parts[1] - 1, parts[2]); 

      return format(date, "MM/dd/yyy")
    }
  }
}
