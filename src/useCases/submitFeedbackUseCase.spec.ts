import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

describe('Submit feedback', () => {
  it('Should be able to submit a feedback', async () => {

    const submitFeedback = new SubmitFeedbackUseCase(
      {create: async () => {}},
      {sendMail: async () => {}}
    ); // Se passar instancias de banco de dados e etc deixa de ser teste unitario

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example Comment',
      screenshot: 'test.jpg'
    })).resolves.not.toThrow()
  })
})