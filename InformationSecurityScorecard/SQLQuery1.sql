select * from Organization

delete from Organization where OrganizationId in (1,2,4)

select * from Users

select * from Survey

select * from Questionnaire_Section

select * from Questionnaire


select * from Questionnaire_Instance

select count(Questionnaire_InstanceId) from Questionnaire_Instance where QuestionId=1
select * from AnswerInstance


