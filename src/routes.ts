import { Router } from "express";
import nodemailer from 'nodemailer'
import { NodemailerMailAdapter } from "./adapters/nodemailer/NodemailerMailAdapter";
import { prisma } from "./prisma";
import { prismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./useCases/submitFeedbackUseCase";
export const routes = Router();


routes.post('/feedbacks', async (request,response) => {
  const {type, comment, screenshot} = request.body;
  const prismaFeedbackRepository = new prismaFeedbacksRepository();
  const nodemailerAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerAdapter)
  submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return response.status(201).send()
 })