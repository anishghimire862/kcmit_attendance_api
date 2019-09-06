module.exports = class AttendanceDto {
	constructor(status, subjectSemesterId, subjectCode) {
		this.status = status
		this.subjectSemesterId = subjectSemesterId,
		this.subjectCode = subjectCode
	}
}
