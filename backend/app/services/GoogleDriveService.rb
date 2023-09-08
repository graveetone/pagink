require 'google_drive'

class GoogleDriveService
  def initialize(file)
    @file = file
  end

  def upload
    session = get_session

    file_data = URI(@file)
    file_name = SecureRandom.hex + '.jpg'

    uploaded_file = session.upload_from_string(file_data.data, file_name, convert: false,
                                                                          content_type: file_data.content_type)
    uploaded_file.acl.push(type: 'anyone', role: 'reader')

    uploaded_file.web_content_link
  end

  private

  def get_session
    GoogleDrive::Session.from_service_account_key(File.join('config', 'drive_creds.json'))
  end
end
