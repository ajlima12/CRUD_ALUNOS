const { createApp } = Vue;

createApp({
  data() {
    return {
      alunos: [
        {
          nome: 'Adriana Lima',
          cpf: '123.456.789-00',
          ra: '12345',
          email: 'adriana@fatec.com',
          ativo: true,
        },
        // Adicione mais alunos aqui, se necessário
      ],
      form: {
        nome: '',
        cpf: '',
        ra: '',
        email: '',
      },
      showModal: false,
      isEditing: false,
      editIndex: null,
      successMessage: '',
      accessibilityMenuVisible: false,
    };
  },
  methods: {
    showAddModal() {
      this.resetForm();
      this.showModal = true;
      this.isEditing = false;
    },
    editAluno(index) {
      this.editIndex = index;
      const aluno = this.alunos[index];
      this.form = { ...aluno }; // Preenche o formulário com os dados do aluno
      this.showModal = true;
      this.isEditing = true;
    },
    addAluno() {
      this.alunos.push({ ...this.form, ativo: true }); // Adiciona o novo aluno com status ativo
      this.closeModal();
      this.successMessage = 'Aluno adicionado com sucesso!';
    },
    updateAluno() {
      this.alunos[this.editIndex] = {
        ...this.form,
        ativo: this.alunos[this.editIndex].ativo,
      }; // Atualiza o aluno
      this.closeModal();
      this.successMessage = 'Aluno editado com sucesso!';
    },
    confirmDelete(index) {
      const aluno = this.alunos[index];
      aluno.ativo = !aluno.ativo; // Alterna o status
      this.successMessage = aluno.ativo
        ? 'Conta reativada com sucesso'
        : 'Conta desativada com sucesso';
    },
    closeModal() {
      this.showModal = false;
      this.resetForm();
    },
    resetForm() {
      this.form = { nome: '', cpf: '', ra: '', email: '' };
    },
    toggleAccessibilityMenu() {
      this.accessibilityMenuVisible = !this.accessibilityMenuVisible;
    },

  },
}).mount('#app');
