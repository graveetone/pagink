class ChangeDefaultStatusToUnconfirmed < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :status, from: 'ACTIVE', to: 'UNCONFIRMED'
  end
end
