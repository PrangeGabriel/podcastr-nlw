export function convertDurationToTimeString(duration: number){
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60

  const timeString = [ hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0')) // essa funcao faz ter dois digitos e adicionar um zero na frente de uma hora ou minuto com apenas um digito
    .join(':')

  return timeString;
}