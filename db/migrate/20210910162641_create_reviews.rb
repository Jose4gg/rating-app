class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :details, null: false
      t.integer :rating, null: false
      t.timestamps
    end
  end
end
