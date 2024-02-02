/* 
Permissões de usuário 
Criem mais duas variáveis: uma que guarde a senha de um usuário e outra que guarde se o usuário tem permissões de administrador ou não. Lembrem que um usuário deve poder mudar sua senha à vontade, mas a permissão de administrador é atribuída apenas no momento da criação do usuário e não pode ser alterada depois. 
 
Na sequência, criem duas novas estruturas condicionais. A primeira estrutura deve imprimir a mensagem “Por favor, insira sua nova senha” caso o  username e a senha estejam corretos, e imprimir “Username / senha incorretos” caso qualquer um dois esteja errado. 
 
 A segunda estrutura condicional deve imprimir a mensagem “Você não pode acessar esta parte do sistema” caso o usuário não tenha permissões de administrador, e a mensagem “Bem-vindo(a) à área de administrador” caso tenha sim as permissões necessárias. 
 
Alterem os valores das variáveis e executem seu código novamente para testar todas as saídas possíveis de mensagens. 
*/

const email = "jeff@gmail.com"
const id = 1234

let emailUsuario = "jeff@gmail.com"
let idUsuario = 1234

if (emailUsuario === email && idUsuairio === id) {
    console.log("Deseja mudar a senha?")
} else {
    console.log ("Usuario sem permissão!!")
}