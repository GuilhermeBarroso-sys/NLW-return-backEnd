import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(private feedbacksRepository: FeedbacksRepository, private mailAdapter : MailAdapter) {

  }
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const {type,comment} = request
    await this.feedbacksRepository.create(request)
    await this.mailAdapter.sendMail({
      subject: 'Novo feedback ',
      body: [
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentario: ${comment} </p>`
     ].join('\n')
    })
  }
}