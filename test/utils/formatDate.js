class FormatDate{
    async formatDateFunc(inputDateStr) {
        const inputDate = new Date(inputDateStr);
        const day = inputDate.getDate();
        const month = inputDate.getMonth() + 1;
        const year = inputDate.getFullYear();
        return `${month}-${day}-${year}`;
      }
}  
module.exports = new FormatDate()
