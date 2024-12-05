const skillInput = document.getElementById('skillInput');
const addButton = document.getElementById('addButton');
const skillList = document.getElementById('skillList');

addButton.addEventListener('click', () => {
  const newSkill = skillInput.value.trim();

  if (newSkill !== '') {
    // Buat elemen div untuk skill baru
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill');
    skillItem.textContent = newSkill;

    // Buat tombol hapus
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'x';

    // Tambahkan event listener untuk menghapus skill
    deleteButton.addEventListener('click', () => {
      skillList.removeChild(skillItem);
    });

    // Gabungkan skill dan tombol hapus, lalu tambahkan ke daftar
    skillItem.appendChild(deleteButton);
    skillList.appendChild(skillItem);

    // Kosongkan input
    skillInput.value = '';
  }
});