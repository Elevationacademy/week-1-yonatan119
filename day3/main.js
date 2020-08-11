const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
const newGenes = [...genes]
newGenes[4] = genes[2]
newGenes[2] = genes[4]
newGenes.splice(3 , 1 , genes[3] , genes[3])
newGenes.unshift("FXT")
console.log(newGenes)
console.log(genes)
