
const alunos = ['ramon', 'pedro', 'pedro', 'pedro']
const contagem = {}

for(let aluno of alunos ){
   if (contagem[aluno]){
        contagem[aluno] += 1;
    }else{
        contagem[aluno] + 1;
    }
}

for(let chave in contagem){
    console.log(`${chave}: ${contagem[chave]}`);
}