import React from 'react'; 
import { View } from 'native-base';
import AdicionarTarefa from '../components/AdicionarTarefa';
import ListaTarefas from '../components/ListaTarefas'; 

const TarefasScreen: React.FC = () => { 
  return (
    <View style={{ flex: 1, backgroundColor: '#402291' }}> {/* Define o estilo do container principal. */}
      {/* Formulário de Adicionar Tarefa */}
      <AdicionarTarefa /> {/* Renderiza o componente que permite adicionar novas tarefas. */}
      {/* Lista de Tarefas */}
      <ListaTarefas /> {/* Renderiza o componente que exibe a lista de tarefas existentes. */}
    </View>
  );
};

export default TarefasScreen; 