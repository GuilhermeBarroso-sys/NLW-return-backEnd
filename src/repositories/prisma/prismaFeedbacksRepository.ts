import { prisma } from '../../prisma'
import {FeedbackCreateData, FeedbacksRepository} from '../feedbacksRepository'

export class prismaFeedbacksRepository implements FeedbacksRepository{
  async create({comment,type,screenshot} : FeedbackCreateData) {
    await prisma.feedback.create({
      data:{
        type,
        comment,
        screenshot
      }
    })
  }

}