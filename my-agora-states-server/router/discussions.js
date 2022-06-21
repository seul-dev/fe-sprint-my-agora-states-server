// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, createOne, updateById, deleteById } =
  discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussion 목록을 조회하는 라우터를 작성합니다.
// 경로: /discussions 에서 실행되는 함수
router.get('/', findAll);

// TODO: discussion 하나를 조회하는 라우터를 작성합니다.
// 경로: /discussions/:id
router.get('/:id', findById);

// ADVANCED: discussion 하나를 생성하는 라우터를 작성합니다.
router.post('/discussins', createOne);
// ADVANCED: discussion 하나를 수정하는 라우터를 작성합니다.
router.put('/discussins:id', updateById);
// ADVANCED: discussion 하나를 삭제하는 라우터를 작성합니다.
router.delete('/discussins:id', deleteById);
module.exports = router;
