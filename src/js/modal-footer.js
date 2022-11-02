const studentsModalBtn = document.querySelector('.students-modal');
const modalWindow = document.querySelector('.backdrop-footer');
const modalClose = document.querySelector('.team-modal__close-btn');

studentsModalBtn.addEventListener('click', onModalOpen);
modalClose.addEventListener('click', onModalClose);

function onModalOpen(e) {
  e.preventDefault();
  createTeamMarkup(teamMarkup);
  modalWindow.classList.remove('is-hidden');

  document.addEventListener('keydown', onKeyPress);
  function onKeyPress(e) {
    if (e.code === 'Escape') {
      onModalClose();
      document.removeEventListener('keydown', onKeyPress);
    }
  }
}

function onModalClose(e) {
  modalWindow.classList.add('is-hidden');
}

const teamJson = require('../json/arr.json');

const teamList = document.querySelector('.team__list');

const teamMarkup = teamJson
  .map(({ name, foto_url, github, role }) => {
    return `<li class="team__member">
          <img
            src="${foto_url}"
            alt="${name}"
            class="team__photo"
            width="100"
          />
          <div class="team__info">
            <p class="team__name">${name.replace('_', ' ')}</p>
            <a href="${github}" class="team__git">GitHub: ${github.replace(
      'https://github.com/',
      ''
    )}</a>
            <p class="team__role">Role: ${role}</p>
          </div>
      </li>`;
  })
  .join('');

function createTeamMarkup(markup) {
  teamList.innerHTML = markup;
}
